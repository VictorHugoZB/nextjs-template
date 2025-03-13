import { ThemeSwitcher } from "@/components/theme-switcher";
import { H1, H2, P } from "@/components/typography";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <H1 className="uppercase text-foreground">
          Parabéns, aqui está seu <b className="text-primary">inicio!</b>
        </H1>
        <H2>Parabéns, aqui está seu inicio subtitulo</H2>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus porro qui ullam et dolore pariatur voluptatibus, voluptatum in
          amet, praesentium fuga est quisquam itaque similique ad rem sed aspernatur vero, doloremque assumenda impedit velit veritatis?
          Ratione, officiis dignissimos sed dicta sint fugit eveniet dolore aut asperiores quo adipisci odit nesciunt. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sequi explicabo tempore dolor nulla culpa porro neque, tempora, non eos hic totam distinctio
          est autem debitis? Qui, laudantium. Magnam voluptatibus, doloremque, ea nemo illo praesentium hic quasi iure deleniti minima
          suscipit exercitationem fugiat repudiandae consequuntur quas sapiente accusamus quae! Quos corrupti atque sint, sunt assumenda
          repellat esse mollitia perferendis aperiam in, fugit non animi quibusdam incidunt! Ad facilis officia quia iusto commodi fuga
          fugiat voluptatibus placeat deserunt aliquid sunt fugit nulla, accusantium expedita reiciendis ipsa odit vitae tempore ipsam,
          culpa enim ut ullam! Eveniet quas sint est laudantium voluptatibus, magnam similique!
        </P>
        <ThemeSwitcher />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <H2>footer</H2>
      </footer>
    </div>
  );
}
