"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "../ui/slider";

interface Bookingprops {
  title: string;
  cost: string;
  type: string;
}
const Booking: React.FC<Bookingprops> = ({ title, cost, type }) => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits"),
    package: z.string(),
    members: z.string().refine((value) => parseInt(value) >= 3, {
      message: "At least 3 members required",
    }),
    hours: z.string().refine(
      (value) => {
        const number = parseInt(value);
        return number >= 1 && number <= 23;
      },
      {
        message: "Duration must be between 1 and 23 hours",
      }
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: title || "",
      hours: "1",
      members:'3'
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log(title);
  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-textdark-200">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-surface border-textdark-300 py-1"
                    placeholder="Enter your name here"
                    {...field}
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
              <FormItem className="w-full">
                <FormLabel className="text-textdark-200">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-surface border-textdark-300 py-1"
                    placeholder="Enter your email"
                    {...field}
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
              <FormItem className="w-full">
                <FormLabel className="text-textdark-200">Phone</FormLabel>
                <FormControl>
                  <Input
                    className="bg-surface border-textdark-300 py-1"
                    placeholder="Enter your phone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-textdark-200">Package</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full bg-surface border-textdark-300 py-1">
                      <SelectValue
                        className="placeholder:text-textdark-200"
                        placeholder={field.value || "Select a package"}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-surface">
                    {/* Options for "Individual" */}
                    {type === "Individual" && (
                      <>
                        <SelectItem className="cursor-pointer" value="Daily">
                          Daily
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="Monthly">
                          Monthly
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="Weekly">
                          Weekly
                        </SelectItem>
                      </>
                    )}

                    {/* Options for "Team" */}
                    {type === "Team" && (
                      <>
                        <SelectItem className="cursor-pointer" value="Weekly">
                          Weekly
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="Monthly">
                          Monthly
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="Quarterly"
                        >
                          Quarterly
                        </SelectItem>
                      </>
                    )}

                    {/* Options for "Meeting" */}
                    {type === "Meeting" && (
                      <>
                        <SelectItem className="cursor-pointer" value="Hourly">
                          Hourly
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="Daily">
                          Daily
                        </SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          {type === "Team" && (
            <FormField
              control={form.control}
              name="members"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-textdark-200">
                    No. of members (3 - 5)
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-4">
                    <Slider
                      min={3}
                      max={5}
                     value={[Number(field.value) || 3]} // Provide an array
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                    <Input
                      className="bg-surface border-textdark-300 py-1"
                      placeholder="Members"
                      type="number"     
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value; // Get user input
                        if (value === "") {
                          field.onChange(value); // Allow empty value for editing
                        } else if ([3, 4, 5].includes(Number(value))) {
                          field.onChange(Number(value)); // Update form field for valid values
                        }
                      }}
                      onBlur={() => {
                        if (!field.value || ![3, 4, 5].includes(Number(field.value))) {
                          field.onChange(3); // Reset to default if invalid on blur
                        }
                      }}
                    />
                    </div>
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {type === "Meeting" && title === "Hourly" && (
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-textdark-200">
                    No. of hours
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-surface border-textdark-300 py-1"
                      placeholder="Enter number of hours"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className={cn("py-3  lg:w-fit mt-8")}>
            Book your seat
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Booking;
