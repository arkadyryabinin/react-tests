function Column({ children, colWidth, gap }) {
  return (
    <div className="Column" style={{ width: colWidth, gap }}>{children}</div>
  )
}

export default function Masonry({ children, numColumns, colWidth, gap }) {
  const columnsList = (new Array(numColumns)).fill(0).map((x, i) => (
    <Column
      key={i}
      colWidth={colWidth}
      gap={gap}
    >
      {children.filter((item, index) => index % numColumns === i)}
    </Column>
  ));

  const style = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  };

  return (
    <div
      className="Masonry" style={style}>{columnsList}</div>
  )
}