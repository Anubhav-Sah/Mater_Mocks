// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { useState, useEffect } from "react";
// // // // // // import { useForm } from "react-hook-form";
// // // // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // // // import * as z from "zod";
// // // // // // import { useRouter, useSearchParams } from "next/navigation";
// // // // // // import { useAuth } from "@/hooks/use-auth";
// // // // // // import { authService } from "@/services/auth.service";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Label } from "@/components/ui/label";
// // // // // // import { toast } from "sonner";
// // // // // // import { Loader2 } from "lucide-react";
// // // // // // import { USER_ROLES } from "@/lib/constants";

// // // // // // const loginSchema = z.object({
// // // // // //   email: z.string().email({ message: "Please enter a valid email address." }),
// // // // // //   password: z.string().min(1, { message: "Password is required." }),
// // // // // // });

// // // // // // type LoginFormValues = z.infer<typeof loginSchema>;

// // // // // // export default function StudentLoginPage() {
// // // // // //   const router = useRouter();
// // // // // //   const searchParams = useSearchParams();
// // // // // //   const { login: setAuthUser, isAuthenticated, isLoading: isAuthLoading, user } = useAuth();
// // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     if (!isAuthLoading && isAuthenticated) {
// // // // // //       if (user?.role === USER_ROLES.ADMIN) {
// // // // // //         router.push("/admin/dashboard");
// // // // // //       } else {
// // // // // //         router.push("/dashboard");
// // // // // //       }
// // // // // //     }
// // // // // //   }, [isAuthLoading, isAuthenticated, user, router]);

// // // // // //   const form = useForm<LoginFormValues>({
// // // // // //     resolver: zodResolver(loginSchema),
// // // // // //     defaultValues: {
// // // // // //       email: "",
// // // // // //       password: "",
// // // // // //     },
// // // // // //   });

// // // // // //   const onSubmit = async (data: LoginFormValues) => {
// // // // // //     setIsLoading(true);
// // // // // //     try {
// // // // // //       const response = await authService.login(data);
// // // // // //       if (response.success && response.data) {
// // // // // //         setAuthUser(response.data.accessToken, response.data.user);
// // // // // //         toast.success("Successfully logged in!");
        
// // // // // //         const returnUrl = searchParams.get("returnUrl");
// // // // // //         if (returnUrl) {
// // // // // //           router.push(returnUrl);
// // // // // //         } else if (response.data.user.role === USER_ROLES.ADMIN) {
// // // // // //           router.push("/admin/dashboard");
// // // // // //         } else {
// // // // // //           router.push("/dashboard");
// // // // // //         }
// // // // // //       } else {
// // // // // //         toast.error(response.message || "Invalid email or password.");
// // // // // //       }
// // // // // //     } catch (error: any) {
// // // // // //       toast.error(error.message || "Failed to login. Please check your credentials.");
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   if (isAuthLoading || isAuthenticated) {
// // // // // //     return (
// // // // // //       <div className="flex items-center justify-center py-20">
// // // // // //         <Loader2 className="w-8 h-8 text-[#D00113] animate-spin" />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="space-y-6 animate-in fade-in duration-300">
// // // // // //       <div>
// // // // // //         <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back Aspirant</h1>
// // // // // //         <p className="text-sm text-slate-500 mt-1">Provide credentials to access dashboards and launch active mocks.</p>
// // // // // //       </div>

// // // // // //       <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
// // // // // //         <div className="space-y-2">
// // // // // //           <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</Label>
// // // // // //           <Input 
// // // // // //             id="email"
// // // // // //             type="email" 
// // // // // //             placeholder="name@example.com" 
// // // // // //             className="w-full text-sm px-4 py-6 rounded-lg border-slate-200 bg-slate-50/50 font-medium text-slate-800" 
// // // // // //             {...form.register("email")}
// // // // // //           />
// // // // // //           {form.formState.errors.email && (
// // // // // //             <p className="text-xs text-red-500 font-medium">{form.formState.errors.email.message}</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div className="space-y-2">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</Label>
// // // // // //             <Link href="/forgot-password" className="text-xs font-bold text-[#D00113] hover:underline tab-index-[-1]">
// // // // // //               Forgot Password?
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //           <Input 
// // // // // //             id="password"
// // // // // //             type="password" 
// // // // // //             placeholder="••••••••" 
// // // // // //             className="w-full text-sm px-4 py-6 rounded-lg border-slate-200 bg-slate-50/50 font-medium text-slate-800" 
// // // // // //             {...form.register("password")}
// // // // // //           />
// // // // // //           {form.formState.errors.password && (
// // // // // //             <p className="text-xs text-red-500 font-medium">{form.formState.errors.password.message}</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <Button 
// // // // // //           type="submit" 
// // // // // //           disabled={isLoading}
// // // // // //           className="w-full py-6 bg-[#D00113] hover:bg-[#b0010f] text-white font-bold text-sm rounded-lg shadow-md transition-all mt-6"
// // // // // //         >
// // // // // //           {isLoading ? (
// // // // // //             <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Authenticating...</>
// // // // // //           ) : (
// // // // // //             "Sign In to Portal"
// // // // // //           )}
// // // // // //         </Button>
// // // // // //       </form>

// // // // // //       <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
// // // // // //         Don&apos;t have an account?{" "}
// // // // // //         <Link href="/register" className="text-[#D00113] font-bold hover:underline">
// // // // // //           Create Account Free
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/hooks/use-auth";
// import { authService } from "@/services/auth.service";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";
// import { USER_ROLES } from "@/lib/constants";

// const loginSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid registered email address." }),
//   password: z.string().min(1, { message: "Password is required to log in." }),
// });

// type LoginFormValues = z.infer<typeof loginSchema>;

// function StudentLoginForm() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login: setAuthUser, isAuthenticated, isLoading: isAuthLoading, user } = useAuth();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!isAuthLoading && isAuthenticated) {
//       if (user?.role === USER_ROLES.ADMIN) {
//         router.push("/admin/dashboard");
//       } else {
//         router.push("/dashboard");
//       }
//     }
//   }, [isAuthLoading, isAuthenticated, user, router]);

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     setIsLoading(true);
//     try {
//       const response = await authService.login(data);
//       if (response.success && response.data) {
//         setAuthUser(response.data.accessToken, response.data.user);
//         toast.success("Successfully logged in!");
        
//         const returnUrl = searchParams.get("returnUrl");
//         if (returnUrl) {
//           router.push(returnUrl);
//         } else if (response.data.user.role === USER_ROLES.ADMIN) {
//           router.push("/admin/dashboard");
//         } else {
//           router.push("/dashboard");
//         }
//       } else {
//         toast.error(response.message || "Invalid email or password.");
//       }
//     } catch (error: any) {
//       toast.error(error.message || "Failed to login. Please check your credentials.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isAuthLoading || isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full space-y-6">
//       {/* Institutional Header Block */}
//       <div className="border-b border-slate-200 pb-4 text-left">
//         <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight">
//           Aspirant Login
//         </h1>
//         <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
//           Log in to access your dashboard, continuous analytics, and live test series.
//         </p>
//       </div>

//       {/* Main Credentials Form */}
//       <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
//         {/* Email Address */}
//         <div className="space-y-1.5">
//           <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             Registered Email Address
//           </Label>
//           <Input 
//             id="email"
//             type="email" 
//             placeholder="name@example.com" 
//             className="w-full text-sm px-4 py-5 rounded-xl border border-slate-300 bg-slate-50/30 font-medium text-slate-800 focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#DC2626] focus-visible:border-[#DC2626] transition-all shadow-sm" 
//             {...form.register("email")}
//           />
//           {form.formState.errors.email && (
//             <p className="text-xs text-[#DC2626] font-semibold mt-1">
//               {form.formState.errors.email.message}
//             </p>
//           )}
//         </div>

//         {/* Password */}
//         <div className="space-y-1.5">
//           <div className="flex justify-between items-center">
//             <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
//               Password
//             </Label>
//             <Link href="/forgot-password" className="text-xs font-semibold text-[#DC2626] hover:underline" tabIndex={-1}>
//               Forgot Password?
//             </Link>
//           </div>
//           <Input 
//             id="password"
//             type="password" 
//             placeholder="••••••••" 
//             className="w-full text-sm px-4 py-5 rounded-xl border border-slate-300 bg-slate-50/30 font-medium text-slate-800 focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#DC2626] focus-visible:border-[#DC2626] transition-all shadow-sm" 
//             {...form.register("password")}
//           />
//           {form.formState.errors.password && (
//             <p className="text-xs text-[#DC2626] font-semibold mt-1">
//               {form.formState.errors.password.message}
//             </p>
//           )}
//         </div>

//         {/* Clean Primary Button Action */}
//         <Button 
//           type="submit" 
//           disabled={isLoading}
//           className="w-full py-5 bg-[#1A1A1A] hover:bg-[#DC2626] text-white font-bold text-sm rounded-xl shadow-sm transition-all duration-200 mt-2 tracking-wide"
//         >
//           {isLoading ? (
//             <span className="flex items-center justify-center gap-2">
//               <Loader2 className="h-4 w-4 animate-spin text-white" /> 
//               Logging in...
//             </span>
//           ) : (
//             "Log In"
//           )}
//         </Button>
//       </form>

//       {/* Footer Registration Call */}
//       <div className="text-center pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-500 font-medium">
//         New to Master Mocks?{" "}
//         <Link href="/register" className="text-[#DC2626] font-bold hover:underline">
//           Create an Account
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default function AuthLayout() {
//   return (
//     <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 antialiased">
//       {/* Container switched to an explicit 12-column grid to completely prevent vertical squishing */}
//       <div className="w-full max-w-5xl bg-[#1A1A1A] rounded-[24px] shadow-2xl grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[580px] relative">
        
//         {/* Left Side: Brand Section (Occupies 5 of 12 columns) */}
//         <div className="w-full md:col-span-5 p-8 sm:p-12 flex flex-col justify-between relative bg-[#1A1A1A]">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          
//           <div className="relative z-10">
//             <div className="flex items-center gap-2 mb-12">
//               <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-black text-xs text-[#1A1A1A]">
//                 MM
//               </div>
//               <span className="font-black text-sm tracking-wider text-white uppercase">
//                 Master<span className="text-[#DC2626]">Mocks</span>
//               </span>
//             </div>

//             <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
//               India's 1st Performance-Based Mock Platform
//             </h2>
//             <p className="text-xs text-slate-400 mt-4 font-medium leading-relaxed">
//               Execute test modules at real exam-level rigor, secure target percentage thresholds, and claim your cashback rewards.
//             </p>
//           </div>

//           <div className="mt-12 pt-6 border-t border-slate-800/60 relative z-10">
//             <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
//               Official Examination Interface
//             </span>
//           </div>
//         </div>

//         {/* Right Side: Form Container (Occupies 7 of 12 columns) */}
//         <div className="w-full md:col-span-7 bg-white md:rounded-l-[40px] flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
//           <div className="w-full max-w-sm mx-auto">
//             <StudentLoginForm />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { authService } from "@/services/auth.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { USER_ROLES } from "@/lib/constants";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid registered email address." }),
  password: z.string().min(1, { message: "Password is required to log in." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function StudentLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: setAuthUser, isAuthenticated, isLoading: isAuthLoading, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthLoading && isAuthenticated) {
      if (user?.role === USER_ROLES.ADMIN) {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthLoading, isAuthenticated, user, router]);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      if (response.success && response.data) {
        setAuthUser(response.data.accessToken, response.data.user);
        toast.success("Successfully logged in!");
        
        const returnUrl = searchParams.get("returnUrl");
        if (returnUrl) {
          router.push(returnUrl);
        } else if (response.data.user.role === USER_ROLES.ADMIN) {
          router.push("/admin/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        toast.error(response.message || "Invalid email or password.");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthLoading || isAuthenticated) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-[#D00113] animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Dynamic Form Header */}
      <div className="border-b border-slate-100 pb-4 text-left">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Aspirant Login
        </h1>
        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
          Log in to access your dashboard, continuous analytics, and live test series.
        </p>
      </div>

      {/* Login Credentials Inputs */}
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Registered Email Address
          </Label>
          <Input 
            id="email"
            type="email" 
            placeholder="name@example.com" 
            className="w-full text-sm px-4 py-5 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-slate-800 focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#D00113] focus-visible:border-[#D00113] transition-all" 
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-[#D00113] font-semibold mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Password
            </Label>
            <Link href="/forgot-password" className="text-xs font-semibold text-[#D00113] hover:underline" tabIndex={-1}>
              Forgot Password?
            </Link>
          </div>
          <Input 
            id="password"
            type="password" 
            placeholder="••••••••" 
            className="w-full text-sm px-4 py-5 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-slate-800 focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#D00113] focus-visible:border-[#D00113] transition-all" 
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-xs text-[#D00113] font-semibold mt-1">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Form Submission Trigger */}
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-5 bg-slate-900 hover:bg-[#D00113] text-white font-bold text-sm rounded-xl shadow-sm transition-all duration-200 mt-2 tracking-wide"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-white" /> 
              Authenticating...
            </span>
          ) : (
            "Log In"
          )}
        </Button>
      </form>

      {/* Alternative Auth Option Link */}
      <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
        New to Master Mocks?{" "}
        <Link href="/register" className="text-[#D00113] font-bold hover:underline">
          Create an Account
        </Link>
      </div>
    </div>
  );
}