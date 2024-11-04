import {Image, Text, StyleSheet, Platform, FlatList,} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import ItemCard, {Item} from "@/components/itemCards";

export default function HomeScreen() {

    const data: Item[] = [
        {
            id: '1',
            title: 'Baked goods',
            store: 'Penelope\'s',
            price: '$4.99',
            rating: '5.0',
            distance: '200m',
            pickupTime: '17:40 - 18:00',
        },
        {
            id: '2',
            title: 'Groceries',
            store: 'Super Marché',
            price: '$5.99',
            rating: '4.8',
            distance: '550m',
            pickupTime: '10:00 - 14:00',
        },
        {
            id: '3',
            title: 'Pastries',
            store: 'Bakery Bliss',
            price: '$3.99',
            rating: '4.7',
            distance: '300m',
            pickupTime: '12:00 - 16:00',
        },
        {
            id: '4',
            title: 'Vegetables',
            store: 'Green Market',
            price: '$6.99',
            rating: '4.9',
            distance: '150m',
            pickupTime: '08:00 - 10:00',
        },
        {
            id: '5',
            title: 'Fruits',
            store: 'Fruit Hub',
            price: '$4.49',
            rating: '4.5',
            distance: '450m',
            pickupTime: '09:00 - 13:00',
        },
    ];

  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.location}>📍 Current location within 2 km</Text>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <FlatList
              data={data}
              renderItem={({ item }) => <ItemCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
          />
          <Text style={styles.sectionTitle}>Pick up now</Text>
          {/* Repeat FlatList for "Pick up now" section */}
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    location: { fontSize: 16, color: '#6e6e6e' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 8 },
});
