// components/ItemCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface Item {
    id: string;
    title: string;
    store: string;
    price: string;
    rating: string;
    distance: string;
    pickupTime: string;
}

interface ItemCardProps {
    item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image
                source={{
                    uri: "https://plus.unsplash.com/premium_photo-1665669263531-cdcbe18e7fe4?q=80&w=3025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.image}
            />
            <Text style={styles.store}>{item.store}</Text>
        </View>

        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.pickupTime}>Pick up today: {item.pickupTime}</Text>
        <Text style={styles.details}>
            {item.rating} • {item.distance}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 200,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginRight: 16,
    },
    imageContainer: {
        position: 'relative', // Needed to position the store name on top
        width: '100%',
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    store: {
        position: 'absolute',
        top: 8,
        left: 8,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 4,
    },
    price: {
        color: "#4CAF50",
        fontWeight: "bold",
        fontSize: 18,
    },
    pickupTime: {
        color: "#6e6e6e",
        fontSize: 12,
    },
    details: {
        color: "#6e6e6e",
        fontSize: 12,
    },
});

export default ItemCard;
