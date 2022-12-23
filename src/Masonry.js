// usage:
// <Masonry numColumns={5} colWidth={240} gap={20)>
//   {/* array of JSX items */}
// </Masonry>


function Column({ children, colWidth, gap }) {
  const style = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: colWidth,
    gap,
  };
  return (
    <div style={style}>{children}</div>
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
    alignItems: 'flex-start',
    gap,
  };

  return (
    <div style={style}>{columnsList}</div>
  )
}