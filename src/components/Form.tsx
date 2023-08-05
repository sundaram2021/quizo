"use client"
import { Button } from "@/components/ui/button";
// import { db } from "@/lib/db/index";
// import { users } from "@/lib/db/schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiSpinnerLight } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const[loading, setLoading] = React.useState(false);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  async function onSubmit(data: Input) {
    try {
      setLoading(true);   
      const res = await fetch("api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      })

      console.log(res);

      if(!res.ok){
        throw new Error("Something went wrong");
      }
      

      toast({
        title: "Successfully Logged In",
        variant: "default",
      })
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Error" + error,
        variant: "destructive",
      })
    }finally{
      setLoading(false);
    }
    console.log(data);
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Take a Quiz and move you next steps</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <motion.div
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>  
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  {loading ? <div className="animate-spin duration-75 text-2xl "><PiSpinnerLight  /></div> : "Submit"}
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name"]);
                    const emailState = form.getFieldState("email");
                    const nameState = form.getFieldState("name");

                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;

                    setFormStep(1);
                  }}
                >
                  Login
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => {
                    setFormStep(0);
                  }}
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Go Back
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}