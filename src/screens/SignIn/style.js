import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  title: {
    color: theme.colors.secondary90,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    lineHeight: 40,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    lineHeight: 25,
  },
});
