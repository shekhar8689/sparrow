import * as SecureStore from 'expo-secure-store';

// Save data
export const storeData = {
  set: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
    console.log(`✅ Securely saved ${key}`);
  },

  get: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    console.log(`🔑 Retrieved ${key}:`, value);
    return value;
  },

  remove: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
    console.log(`🗑 Removed ${key}`);
  },
};

// Example Usage:
// await storeData.set("access_token", "dkjhfskjdfhksj");
// const token = await storeData.get("access_token");
