import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../../utils/Color';
const SECTIONS = [
  {
    title: 'Shipping Info',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Support',
    content: 'Lorem ipsum...',
  },
];
const AccordionList = () => {
  const [activeSections, setActiveSections] = useState([]);
  const renderSectionTitle = section => {
    return (
      <View style={styles.content}>{/* <Text>{section.content}</Text> */}</View>
    );
  };

  const renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <FontAwesome5Icon name={'chevron-right'} color="black" size={15} />
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };
  const updateSections = activedSections => {
    setActiveSections(activedSections);
  };
  return (
    <View style={styles.container}>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  content: {},
  header: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderTopColor: Colors.GRAY,
    borderBottomColor: Colors.GRAY,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  headerText: {
    fontSize: 16,
  },
});
export default AccordionList;
