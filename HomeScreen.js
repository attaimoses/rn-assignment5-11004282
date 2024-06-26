import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../App';

export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <Text style={[styles.welcomeText, isDarkMode && styles.darkText]}>Welcome back,</Text>
        <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Eric Atsu</Text>
      </View>
      <View style={[styles.card, isDarkMode && styles.darkCard]}>
        <Text style={[styles.cardNumber, isDarkMode && styles.darkText]}>4562 1122 4595 7852</Text>
        <Text style={isDarkMode && styles.darkText}>AR Jonson</Text>
        <Text style={isDarkMode && styles.darkText}>Expiry Date: 24/2000</Text>
        <Text style={isDarkMode && styles.darkText}>CVV: 6986</Text>
      </View>
      <View style={styles.transactions}>
        <Text style={[styles.transactionsTitle, isDarkMode && styles.darkText]}>Transaction</Text>
        <Text style={isDarkMode && styles.darkText}>Apple Store - $5.99</Text>
        <Text style={isDarkMode && styles.darkText}>Spotify - $12.99</Text>
        <Text style={isDarkMode && styles.darkText}>Money Transfer - $300</Text>
        <Text style={isDarkMode && styles.darkText}>Grocery - $88</Text>
      </View>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </ScrollView>
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
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactions: {
    marginBottom: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
