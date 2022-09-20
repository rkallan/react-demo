/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { PDFViewer, Document, Font, Page, Text, Image, View, StyleSheet } from "@react-pdf/renderer";
import stylesExport from "@rrkallan/ui-library/resources/styles/exports/_exports.scss";

const { fonts } = stylesExport;
const font = JSON.parse(fonts).split(", ");

font.forEach((fontData) => {
    const [fontFileName, fontProps] = fontData.split(" = ");
    const fontRegister = {
        src: `${process.env.PUBLIC_URL}/resources/fonts/${fontFileName}.ttf`,
    };

    fontProps.split(",").forEach((fontProp) => {
        const [key, value] = fontProp.split(": ");
        const objectKey = key === "fontFamily" ? "family" : key;
        const objectValue = key === "fontWeight" ? JSON.parse(value) : value;
        fontRegister[objectKey] = objectValue;
    });

    Font.register({ ...fontRegister });
});

const styles = StyleSheet.create({
    pdfViewer: {
        flex: 1,
    },
    body: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        paddingTop: 16,
        paddingBottom: 32,
        paddingHorizontal: 0,
        backgroundColor: stylesExport.colorWhite,
    },
    backgroundLeft: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "40%",
        backgroundColor: stylesExport.colorGrayLighter,
    },
    backgroundBottom: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 16,
        width: "100%",
        backgroundColor: stylesExport.colorRed,
    },
    contentLeft: {
        width: "40%",
        paddingHorizontal: 16,
    },
    contentRight: {
        width: "60%",
        paddingHorizontal: 16,
    },
    personalInformation: {
        position: "absolute",
        top: -16,
        left: 0,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderLeft: `16px solid ${stylesExport.colorRed}`,
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: 500,

        content: {
            paddingBottom: 16,
        },
    },
});

function Resume() {
    return (
        <PDFViewer style={styles.pdfViewer}>
            <Document
                title="Resume RR Kallan"
                subject="Resume RR Kallan Nederlands"
                author="Ravi Rishaad Kallan"
                language="nl"
                pdfVersion="1.7"
            >
                <Page style={styles.body} wrap>
                    <View style={styles.backgroundLeft} fixed />
                    <View style={styles.backgroundBottom} fixed />

                    <View style={styles.contentLeft}>
                        <View style={styles.personalInformation} fixed>
                            <View style={styles.personalInformation.content}>
                                <Text>Ravi Rishaad Kallan</Text>
                                <Text>Troelstrakade 259</Text>
                                <Text>2531AE Den Haag</Text>
                                <Text>Nederland</Text>
                            </View>
                            <View style={styles.personalInformation.content}>
                                <Text>Ravi Rishaad Kallan</Text>
                                <Text>Troelstrakade 259</Text>
                                <Text>2531AE Den Haag</Text>
                                <Text>Nederland</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentRight}>
                        <View wrap={false}>
                            <Text>Don Quijote de la Mancha</Text>
                            <Text>Miguel de Cervantes</Text>
                            <Image src="https://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg" />
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Resume;
