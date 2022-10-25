/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { PDFViewer, Document, Font, Page, Text, Link, Image, View, StyleSheet } from "@react-pdf/renderer";
import { ucFirst } from "@rrkallan/js-helpers";
import stylesExport from "@rrkallan/ui-library/resources/styles/exports/_exports.scss";
import resumeData from "./resources/data/resume-en.json";

const convertToPt = (value) => {
    const [size, unitFromValue] = value.split(/([\d.]+)/).filter(Boolean);
    const unit = unitFromValue.toLowerCase();

    if (unit === "pt") return size;

    if (unit === "%") return (size / 100) * 12;

    if (unit === "px") return (size / 16) * 12;

    return size * 12;
};

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
        fontFamily: "Raleway",
        fontSize: 8,
        paddingTop: convertToPt(stylesExport.gapDefault),
        paddingBottom: convertToPt(stylesExport.gapLarge),
        paddingHorizontal: 0,
        color: stylesExport.colorBlack,
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
        height: convertToPt(stylesExport.gapDefault),
        width: "100%",
        backgroundColor: stylesExport.colorRed,
    },
    contentLeft: {
        width: "40%",
        paddingHorizontal: convertToPt(stylesExport.gapDefault),
    },
    contentRight: {
        width: "60%",
        paddingHorizontal: convertToPt(stylesExport.gapDefault),
    },
    content: {
        paragraph: {
            fontSize: 8,
        },
        default: {
            fontWeight: 400,
        },
        bolder: {
            fontWeight: 500,
        },
        bold: {
            fontWeight: 700,
        },
        boldest: {
            fontWeight: 900,
        },
    },
    personalInformation: {
        top: -convertToPt(stylesExport.gapDefault),
        left: 0,
        paddingHorizontal: convertToPt(stylesExport.gapDefault) * 1.25,
        paddingTop: convertToPt(stylesExport.gapDefault),
        paddingBottom: convertToPt(stylesExport.gapExtraSmall),
        borderLeft: `${convertToPt(stylesExport.gapDefault)}pt solid ${stylesExport.colorRed}`,
        marginLeft: -convertToPt(stylesExport.gapDefault) * 1.25,
        fontFamily: "Raleway",
        fontSize: 9,
        fontWeight: 400,
        lineHeight: 1.25,

        content: {
            paddingBottom: convertToPt(stylesExport.gapDefault) * 0.75,

            link: {
                textDecoration: "none",
                color: stylesExport.colorBlack,
            },
        },
    },
    pageHeader: {
        position: "relative",
        fontFamily: "Redressed",
        marginHorizontal: convertToPt(stylesExport.gapDefault) * 1.5,
        marginBottom: convertToPt(stylesExport.gapDefault) * 1.5,
        border: `${convertToPt(stylesExport.gapExtraSmall) * 0.75}pt solid ${stylesExport.colorBlack}`,

        name: {
            fontSize: 46,
            textAlign: "center",
            color: stylesExport.colorRed,
            paddingBottom: convertToPt(stylesExport.gapSmall),
        },

        function: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            bottom: -7,
            left: "auto",
            right: "auto",
            marginHorizontal: "auto",

            text: {
                fontSize: 16,
                paddingHorizontal: convertToPt(stylesExport.gapDefault),
                backgroundColor: stylesExport.colorWhite,
            },
        },
    },
    container: {
        marginBottom: convertToPt(stylesExport.gapDefault),

        title: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            fontSize: 16,
            fontWeight: 800,
            textTransform: "uppercase",
            color: stylesExport.colorRed,
            marginBottom: convertToPt(stylesExport.gapExtraSmall),

            border: {
                flex: 1,
                marginLeft: convertToPt(stylesExport.gapDefault),
                height: convertToPt(stylesExport.gapExtraSmall) * 0.75,
                backgroundColor: stylesExport.colorBlack,
            },
        },
    },

    aboutMe: {
        paragraph: {
            marginBottom: convertToPt(stylesExport.gapSmall),
        },
    },

    experience: {
        paddingBottom: convertToPt(stylesExport.gapDefault) * 0.75,
        marginBottom: convertToPt(stylesExport.gapDefault) * 0.75,
        borderBottom: `${convertToPt("2px")}pt solid ${stylesExport.colorGrayLighter}`,

        function: {
            fontSize: 10,
            fontWeight: 600,
        },
        subTitle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-strart",
            marginBottom: convertToPt(stylesExport.gapExtraSmall),

            company: {
                flex: 1,
                fontSize: 9,
                fontWeight: 700,
                color: stylesExport.colorRed,
            },
            place: {
                fontSize: 8,
                fontWeight: 500,
            },
            date: {
                marginLeft: 12,
                fontStyle: "italic",
            },
        },
        tools: {
            marginTop: convertToPt(stylesExport.gapSmall),
        },
    },
    education: {
        display: "flex",
        flexDirection: "row",

        period: {
            width: "25%",
        },

        container: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },

        title: {
            fontSize: 9,
            fontWeight: 700,
        },
    },
    skill: {
        display: "inline-bock",
        marginRight: 16,
    },
});

const birthdayDateOption = { year: "numeric", month: "long", day: "numeric" };
const workDateOption = { year: "numeric", month: "long" };

function Resume() {
    const totalExperience = resumeData.workExperience.length;

    return (
        <PDFViewer style={styles.pdfViewer}>
            <Document {...resumeData.document}>
                <Page style={styles.body} wrap>
                    <View style={styles.backgroundLeft} fixed />
                    <View style={styles.backgroundBottom} fixed />

                    <View style={styles.contentLeft}>
                        <View style={styles.personalInformation} fixed>
                            <View style={styles.personalInformation.content}>
                                {resumeData.personalInformation.address.map((item, index) => {
                                    const key = index;
                                    return <Text key={key}>{item}</Text>;
                                })}
                            </View>
                            <View style={styles.personalInformation.content}>
                                <View style={{ display: "flex", flexDirection: "row" }}>
                                    <Link
                                        style={[styles.personalInformation.content.link, { fontWeight: 700 }]}
                                        src={`tel:${resumeData.personalInformation.phoneNumber}`}
                                    >
                                        <Text>{resumeData.personalInformation.phoneNumber}</Text>
                                    </Link>
                                    <Text style={{ marginHorizontal: 3 }}>|</Text>
                                    <Link
                                        style={[styles.personalInformation.content.link, { fontWeight: 700, color: stylesExport.colorRed }]}
                                        src={`mailto:${resumeData.personalInformation.emailaddress}`}
                                    >
                                        <Text>{resumeData.personalInformation.emailaddress}</Text>
                                    </Link>
                                </View>
                                <View>
                                    {resumeData.personalInformation.webPages.map((item, index) => {
                                        const key = index;
                                        return (
                                            <Link key={key} style={styles.personalInformation.content.link} src={item}>
                                                <Text>{item}</Text>
                                            </Link>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={styles.personalInformation.content}>
                                {resumeData.personalInformation.remaining.map(({ label, value }, index) => {
                                    const key = index;

                                    return (
                                        <Text key={key}>
                                            {!!label && `${ucFirst(label)}: `}
                                            {["Date of birth", "Geboortedatum"].includes(label)
                                                ? new Date(value).toLocaleDateString("en", birthdayDateOption)
                                                : value}
                                        </Text>
                                    );
                                })}
                            </View>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>Education</Text>
                            </View>
                            {resumeData.education.map((education) => {
                                return (
                                    <View key={education.id} style={[styles.container.content, styles.education]}>
                                        <Text style={styles.education.period}>{education.period}</Text>
                                        <View style={styles.education.container}>
                                            <Text style={styles.education.title}>{education.education}</Text>
                                            <Text style={styles.education.institute}>{education.institute}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>Skills</Text>
                            </View>

                            <Text style={[styles.container.content]}>
                                {resumeData.skills.map(({ content }) => {
                                    return (
                                        <Text key={content} style={[styles.skill]}>
                                            {content}
                                            {"   "}
                                        </Text>
                                    );
                                })}
                            </Text>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>Language</Text>
                            </View>

                            <Text style={[styles.container.content]}>Dutch*</Text>

                            <Text style={[styles.container.content]}>English</Text>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>Hobbies</Text>
                            </View>

                            {/* <Text style={[styles.container.content]}>
                                Voetbal, Reizen, Snowboarden, Koken, Auto's, Formule 1, Netflix, Games, Playstation, Muziek, Team sport, BBQ
                            </Text> */}
                            <Text style={[styles.container.content]}>
                                Football, To travel vacation, Snowboard, To cook, Cars, Formule 1, Netflix, Games, Playstation, Music, Team
                                sport, BBQ
                            </Text>
                        </View>
                    </View>

                    <View style={styles.contentRight}>
                        <View style={styles.pageHeader} fixed>
                            <Text style={styles.pageHeader.name}>Ravi Kallan</Text>
                            <View style={styles.pageHeader.function}>
                                <Text style={styles.pageHeader.function.text}>Frontend developer</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>About me</Text>
                                <View style={styles.container.title.border} />
                            </View>
                            <View style={styles.container.content}>
                                {resumeData.aboutMe.map((paragraph, index) => {
                                    const key = index;
                                    return (
                                        <Text key={key} style={[styles.content.paragraph, styles.aboutMe.paragraph]}>
                                            {paragraph.map(({ content, style }, indexContent) => {
                                                const contentKey = `${index}-${indexContent}`;
                                                return (
                                                    <Text key={contentKey} style={styles.content[style]}>
                                                        {content}
                                                    </Text>
                                                );
                                            })}
                                        </Text>
                                    );
                                })}
                            </View>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.container.title}>
                                <Text>Work experience</Text>
                                <View style={styles.container.title.border} />
                            </View>

                            {resumeData.workExperience.map((experience, experienceIndex) => {
                                const isLast = totalExperience === experienceIndex + 1;

                                return (
                                    <View key={experience.id} style={[styles.experience, isLast && { border: 0 }]} wrap={false}>
                                        <Text style={styles.experience.function}>{experience.function}</Text>
                                        <View style={styles.experience.subTitle}>
                                            <Text style={styles.experience.subTitle.company}>
                                                {experience.company}{" "}
                                                <Text style={styles.experience.subTitle.place}>{experience.place}</Text>
                                            </Text>
                                            <Text style={styles.experience.subTitle.date}>
                                                {`${new Date(experience.date.start).toLocaleDateString("en", workDateOption)} - ${new Date(
                                                    experience.date.end
                                                ).toLocaleDateString("en", workDateOption)}`}
                                            </Text>
                                        </View>

                                        {experience.description.map((paragraph, paragraphIndex) => {
                                            const key = paragraphIndex;
                                            return (
                                                <View key={key} style={styles.content.paragraph}>
                                                    {paragraph.map(({ content, style }, indexContent) => {
                                                        if (experienceIndex > 1) return null;

                                                        const contentKey = `${paragraphIndex}-${indexContent}`;

                                                        return (
                                                            <Text key={contentKey} style={styles.content[style]}>
                                                                {content}
                                                            </Text>
                                                        );
                                                    })}
                                                </View>
                                            );
                                        })}

                                        <Text style={styles.experience.tools}>
                                            <Text style={styles.content.bold}>Techniques: </Text>
                                            {experience.toolsAndTechniques.join(", ")}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Resume;
