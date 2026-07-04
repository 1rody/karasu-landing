export default function Featured() {
    return (
        <>
            <section className="h-screen w-full overflow-hidden items-center flex flex-col">
                    <img className=" dark:hidden" width={4000} height={32} src="/assets/backgrounds/transition_dark.svg" alt="Hero Crow" />
                    <img className="hidden dark:block" width={4000} height={32} src="/assets/backgrounds/transition_light.svg" alt="Hero Crow" />
                <div className="flex flex-col -mt-25  p-10 h-screen w-full text-left bg-(--foreground)">

                </div>
            </section>
        </>
    )
}