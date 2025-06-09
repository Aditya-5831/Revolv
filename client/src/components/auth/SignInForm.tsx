import { signInSchema, SignInValues } from "@/src/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import CustomTextInput from "./CustomTextInput";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInValues) => {
    console.log(values);
    reset();
  };

  return (
    <View className="w-full flex-col">
      <View className="flex-col gap-y-1">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder="username"
              label="Username"
              textContentType="username"
              autoCapitalize="none"
              autoComplete="username"
              importantForAutofill="yes"
              returnKeyType="next"
              onChangeText={onChange}
              value={value}
              icon={<User size={23} color={"gray"} />}
              error={errors.username?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder="password"
              label="Password"
              textContentType="password"
              autoComplete="password"
              autoCapitalize="none"
              returnKeyType="done"
              importantForAutofill="yes"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              icon={<Lock size={23} color={"gray"} />}
              error={errors.password?.message}
            />
          )}
        />
        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="my-5 h-14 items-center justify-center rounded-2xl bg-black"
        >
          <Text className="text-lg font-semibold text-white">Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInForm;
