import { TextBlock } from "./EditorSetup"
import SectionHeader from "@/components/Sections/SectionHeader"

export default function BrowserSetup() {
    return (
        <div className="w-full tracking-wider">
            <SectionHeader heading="🌐 My Browser Setup" showButton={false}>
                <div className="w-full">
                    <TextBlock content="I use Microsoft Edge for its speed and integration with web development tools. Here are the extensions that help enhance my browsing and coding workflow:" />
                    <TextBlock
                        heading="Extensions I Use:"
                        listItems={[
                            "uBlock Origin",
                            "Dark Reader",
                            "Web Developer",
                            "LastPass",
                            "ColorZilla",
                            "React Developer Tools",
                            "WhatFont",
                        ]}
                    />
                </div>
            </SectionHeader>
        </div>
    )
}
