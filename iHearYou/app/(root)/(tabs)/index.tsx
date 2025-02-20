import { Text, View } from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View>
      <Link href="/signIn">SignIn</Link>
      <Link href="/(root)/(tabs)/explore">Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
      <Link href="/(root)/properties/1">Properties</Link>


    </View>
  );
}
