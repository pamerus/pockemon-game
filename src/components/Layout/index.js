import s from './layout.module.css'

export const Layout = ({
  id,
  title,
  urlBg,
  colorBg,
  children
}) => {
    const styleLayout = {
      backgroundImage: `url(${urlBg})`,
      backgroundColor: colorBg};

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
          <div className={`${s.desc} ${s.full}`}>
            {children }
          </div>
        </article>
      </div>
    </section>
  );
}