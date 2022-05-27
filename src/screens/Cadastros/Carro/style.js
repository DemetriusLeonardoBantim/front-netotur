import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    color: theme.colors.secondary90,
    textAlign: "center",
  },
  textSubTitle: {
    marginTop: 10,
    color: theme.colors.discord,
    fontWeight: "bold",
  },
  computerImg: {
    marginTop: 60,
  },
});
