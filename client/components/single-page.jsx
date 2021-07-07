import React from 'react'

const Title = ({ title }) => {
    return (
        <div class="section-title">
            <h1>{title}</h1>
            <div class="underline"></div>
        </div>
    )
}

const SinglePage = ({ title, children, withHero, sectionClassName, contentClassName }) => {
    return (
        <>
            {withHero != '' &&
                <header className={withHero}>
                    <Title title={title} />
                </header>}
            <section class={`section ${sectionClassName}`}>
                {withHero === '' &&
                    <Title title={title} />}
                <div class={`section-center ${contentClassName}`}>
                    {children}
                </div>
            </section>

        </>


    )
}

export default SinglePage
