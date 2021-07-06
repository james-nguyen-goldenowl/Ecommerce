import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const AccordionList = ({sections}) => {
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
        sections={sections}
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
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
  },
});
export default AccordionList;
