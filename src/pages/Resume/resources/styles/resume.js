import { StyleSheet, Font } from "@react-pdf/renderer";
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
    body: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
        backgroundColor: stylesExport.colorWhite,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Raleway",
        fontWeight: 300,
    },
    author: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: "Raleway",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Raleway",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    block: {
        position: "absolute",
        height: "100%",
        width: 200,
        left: 0,
        top: 0,
    },
});

export default styles;
