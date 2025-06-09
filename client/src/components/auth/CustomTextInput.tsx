import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View, Pressable } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { cn } from "@/src/lib/utils"; // Tailwind conditional class utility

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  icon,
  error,
  onFocus,
  onBlur,
  secureTextEntry,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View className="mb-4">
      {label && (
        <Text className="mb-2 text-base font-medium text-gray-800">
          {label}
        </Text>
      )}

      <View
        className={cn(
          "flex-row items-center rounded-2xl border bg-white px-4 py-1.5 shadow-sm",
          error
            ? "border-red-500"
            : isFocused
              ? "border-blue-500"
              : "border-gray-300",
          isFocused && "shadow-md",
          className,
        )}
      >
        {icon && <View className="mr-2">{icon}</View>}

        <TextInput
          className="flex-1 text-base text-gray-900"
          placeholderTextColor="#9ca3af"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {/* Password Toggle */}
        {secureTextEntry && (
          <Pressable onPress={() => setIsPasswordVisible((prev) => !prev)}>
            {isPasswordVisible ? (
              <EyeOff size={20} color="gray" />
            ) : (
              <Eye size={20} color="gray" />
            )}
          </Pressable>
        )}
      </View>

      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
