import { Text, TextInput, View } from "react-native";

export default function SignUp() {
  return (
    <View>
      <View>
        <Text>Sign up your shits</Text>
      </View>
      <View>
        <Text>Login to your account</Text>
      </View>
      <View>
        <Text>Email Address</Text>
        <TextInput value="" />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput value="" />
      </View>
      <View>
        <View>
          <Text>Remember Me</Text>
        </View>

        <Text>Forgot Password</Text>
      </View>
    </View>
  );
}
