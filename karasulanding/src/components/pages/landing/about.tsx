export default function AboutSection() {
    return (
        <>
            <section className="h-screen w-full overflow-hidden relative justify-center flex-col items-center flex">
                <div className="flex gap-4 flex-col p-10 lg:w-8/12 md:w-10/12 w-fill m-5 bg-(--foreground) max-h-3/4 rounded-2xl text-left text-(--background)">
                    <div className="flex justify-between gap-5 items-center">
                            <img src="/assets/misc/assets-2.png" alt="karasu" width={120} height={32} className="dark:invert-100" />
                            <img src="/assets/misc/assets-2.png" alt="karasu" width={120} height={32} className="dark:invert-100" />

                    </div>
                    <div className="flex  gap-10 overflow-hidden justify-between items-center">
                        <div>
                            <h2 className="text-3xl font-bold">ABOUT US</h2>
                            <article className="flex flex-col gap-5 lg:max-w-3xl">
                                <p>
                                    Lorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inup
                                    Lorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inupLorem ypsun salut nomet drosdon hepets, nomis inup
                                </p>
                            </article>
                        </div>
                            <img className="relative top-0 -right-40 dark:hidden" height={10} width={300} src="/assets/backgrounds/Crow_light.png" alt="Hero Crow" />
                            <img className="relative top-0 -right-40 hidden dark:block" height={10} width={300} src="/assets/backgrounds/Crow_dark.png" alt="Hero Crow" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 text-center  rounded-2xlt text-(--background)">
                    <h2 className="text-4xl font-bold">Certifications</h2>
                    <div className="flex justify-center items-center gap-5  bg-(--foreground)">
                        <img className="dark:invert-100" height={100} width={800} src="/assets/misc/Certifications.png" alt="Hero Crow" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 rounded-2xl  text-(--background)">
                    <h2 className="text-4xl font-bold">Partners</h2>
                    <div className="flex justify-center items-center gap-5  bg-(--foreground)">
                        <img className="dark:invert-100" height={100} width={800} src="/assets/misc/Certifications.png" alt="Hero Crow" />
                    </div>
                </div>
            </section>
        </>
    )
}