"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle, SendHorizonal } from "lucide-react";
import React from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  lastName: z.string().min(2, {
    message: "Họ phải có ít nhất 2 ký tự.",
  }),
  email: email("Vui lòng nhập địa chỉ email hợp lệ."),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 chữ số.",
  }),
  message: z.string().min(10, {
    message: "Tin nhắn phải có ít nhất 10 ký tự.",
  }),
});

const inputClassName =
  "px-5 py-7 bg-background/60 rounded-md text-foreground border-1 w-full outline-none";

function NotificationDialog({
  open,
  setOpen,
  title,
  message,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  message: string;
}) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function ContactForm() {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setOpen(true);
          setSuccess(false);
        } else {
          form.reset();
          setOpen(true);
          setSuccess(true);
        }
      })
      .catch(() => {
        setOpen(true);
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="col-span-4 lg:space-y-10 space-y-5 lg:p-10 p-3 lg:mt-0 mt-10"
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Họ của bạn"
                    {...field}
                    className={inputClassName}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tên của bạn"
                    {...field}
                    className={inputClassName}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    className={inputClassName}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Số điện thoại liên hệ"
                    {...field}
                    className={inputClassName}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lời nhắn</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Nội dung lời nhắn của bạn"
                  {...field}
                  className={inputClassName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          type="submit"
          className="float-right w-1/2 py-7 rounded-sm bg-[#0065F8] hover:bg-[#0065F8] text-white"
        >
          <p className="uppercase">
            {loading ? "Đang gửi..." : "Gửi tin nhắn"}
          </p>
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <SendHorizonal />
          )}
        </Button>
      </form>

      <NotificationDialog
        open={open}
        setOpen={() => setOpen(false)}
        title={success ? "Thành công" : "Thất bại"}
        message={
          success
            ? "Cảm ơn bạn vì đã gửi tin nhắn cho mình ;) Bạn sẽ sớm nhận được phản hồi từ mình, hãy kiểm tra email của bạn thường xuyên nhé!"
            : "Opps! Có lỗi gì đó xảy ra khiến việc gửi tin nhắn không thành công :( Bạn thử lại xem sao nhé!"
        }
      />
    </Form>
  );
}
