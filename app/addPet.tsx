import React, { useState } from "react";
import {
  TextInput,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Pet } from "@/data/pets";
interface NewPet {
  name: string;
  image: string;
  type: string;
  adopted: 1 | 0;
}
const AddPet = () => {
  const [newPet, setNewPet] = useState<NewPet>({
    name: "",
    image: "",
    type: "",
    adopted: 0,
  });

  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setNewPet({ ...newPet, name: text })}
      />
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPet;
