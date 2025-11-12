import AuthFormWrapper from "@/features/auth/components/AuthFormWrapper";
import SignUpForm from "@/features/auth/components/SignUpForm";

const SignUpPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Already have an account?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN UP"
      title="Sign up for a new account"
      Form={SignUpForm}
      sideImageSrc={"/auth/sign-up.svg"}
    />
  );
};

export default SignUpPage;
