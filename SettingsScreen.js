import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function SettingsScreen() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Language</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>My Profile</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Contact Us</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Change Password</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Privacy Policy</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  option: {
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
