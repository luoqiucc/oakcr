export function TypographyH1(
    {
        children,
    }: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export function TypographyH2(
    {
        children,
    }: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export function TypographySmall(
    {
        children,
    }: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <small className="text-sm font-medium leading-none">
            {children}
        </small>
    )
}
