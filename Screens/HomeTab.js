import { StyleSheet, View, SectionList } from "react-native";
import React, { useEffect, useState } from "react";
import PostImage from "../components/HomeTab/Posts/PostImage";
import Stories from "../components/HomeTab/Stories/Stories";
import Header from "../components/HomeTab/Header";
import PostHeader from "../components/HomeTab/Posts/PostHeader";
import PostFooter from "../components/HomeTab/Posts/PostFooter";
import { useSelector } from "react-redux";
const HomeTab = () => {
  const data = useSelector((data) => data?.posts.recentPosts);
  return (
    <View>
      <Header />
      <View style={{ marginTop: 20 }}>
        {data && (
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={Stories}
            renderSectionHeader={(item) => <PostHeader data={item} />}
            renderSectionFooter={PostFooter}
            contentInset={{ bottom: 50 }}
            contentInsetAdjustmentBehavior="automatic"
            stickySectionHeadersEnabled={false}
            renderItem={({ item }) => <PostImage data={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default HomeTab;

const styles = StyleSheet.create({});
