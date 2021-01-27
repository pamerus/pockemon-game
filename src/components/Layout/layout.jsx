import s from './layout.module.css'

export const Layout = ({
  id,
  title,
  descr,
  urlBg,
  colorBg
}) => {
  console.log(urlBg);
  console.log(colorBg);
    const styleLayout = {
      backgroundImage: `url(${urlBg})`,
      backgroundColor: `${colorBg}`};

  return (
    <section
      className={s.root}
      id={id}
      style={styleLayout}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className="desc full">
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
}