import * as Reacct from 'react'
import Button from "@mui/material/Button";

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

import { PDFViewer } from '@react-pdf/renderer';


interface Person {
  name: string
  pdf: string
}

export default function NameButton({name, pdf}: Person) {
  let showPdf = false

  function click() {
    alert(name)
  }

  if (showPdf) {
    return <PDFViewer>
      <MyDocument />
    </PDFViewer>
  } else {
    return <div>
      <Button onClick={click}>
        {name}
      </Button>
    </div>
  }
}