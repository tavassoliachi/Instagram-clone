import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeTab = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  );
};
export default HomeTab;
const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
      }}
    >
      <Image
        source={require('../assets/headerLogo.png')}
        style={{ height: 45, width: 145, resizeMode: 'contain' }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '40%',
        }}
      >
        <Feather name="plus-square" size={25} />
        <Feather name="heart" size={25} />
        <MaterialCommunityIcons name="facebook-messenger" size={25} />
      </View>
    </View>
  );
};
const Stories = () => {
  const users = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10',
    'user11',
    'user12',
    'user13',
    'user14',
    'user15',
    'user16',
  ];
  return (
    <View>
      <FlatList
        data={users}
        horizontal
        keyExtractor={(el) => el}
        renderItem={(el) => <SingleStory />}
      />
    </View>
  );
};
const SingleStory = () => {
  return (
    <View style={{ margin: 6 }}>
      <View
        style={{
          borderRadius: '50%',
          borderColor: '#13f24f',
          borderWidth: 2,
          maxWidth: 77,
        }}
      >
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
          }}
          style={{
            width: 67,
            height: 67,
            borderRadius: '50%',
            margin: 3,
          }}
        />
      </View>
      <Text style={{ textAlign: 'center' }}>Username</Text>
    </View>
  );
};
const Posts = () => {
  const users = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10',
    'user11',
    'user12',
    'user13',
    'user14',
    'user15',
    'user16',
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={users}
        vertical
        keyExtractor={(el) => el}
        renderItem={(el) => <SinglePost />}
      />
    </View>
  );
};
const SinglePost = () => {
  const [height, setHeight] = useState();

  Image.getSize(
    'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2021-01/gAVazOQrln.jpg',
    (width, height) => {
      let screenWidth = Dimensions.get('window').width;
      let scaleFactor = width / screenWidth;
      let imageHeight = height / scaleFactor;
      setHeight(imageHeight);
    }
  );
  return (
    <View style={{ marginVertical: 5 }}>
      <PostHeader />
      <Image
        source={{
          uri: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2021-01/gAVazOQrln.jpg',
        }}
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: height,
          resizeMode: 'contain',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '30%',
        }}
      >
        <Feather name="heart" size={25} />
        <Feather name="message-circle" size={25} />
        <Ionicons name="paper-plane-outline" size={25} />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: '600' }}>655 likes</Text>
        <Text>
          <Text style={{ fontWeight: '600' }}>Username</Text> Lorem
          Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text.
        </Text>
      </View>
      <Text style={{ color: 'gray', paddingHorizontal: 10 }}>
        View all 7 comments
      </Text>
    </View>
  );
};
const PostHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row', marginLeft: 8 }}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
          }}
          style={{ width: 40, height: 40, borderRadius: '50%' }}
        />
        <Text style={{ alignSelf: 'center', marginLeft: 8 }}>
          Username
        </Text>
      </View>
      <Text
        style={{ marginRight: 20, fontWeight: 'bold', marginTop: 7 }}
      >
        ...
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
