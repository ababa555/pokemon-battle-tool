import NextImage from 'next/image';

interface Props {
  id: string,
  width? : number,
  height? : number,
  className?: string,
  onClick?: (id: string) => void,
}

const Image: React.VFC<Props> = (props) => {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id)
    }
  }

  const data = [
    { id: 'n1', no: '001', name: 'フシギダネ'},
    { id: 'n2', no: '002', name: 'フシギソウ'},
    { id: 'n3', no: '003', name: 'フシギバナ'},
    { id: 'n4', no: '004', name: 'ヒトカゲ'},
    { id: 'n5', no: '005', name: 'リザード'},
    { id: 'n6', no: '006', name: 'リザードン'},
    { id: 'n7', no: '007', name: 'ゼニガメ'},
    { id: 'n8', no: '008', name: 'カメール'},
    { id: 'n9', no: '009', name: 'カメックス'},
  ];

  const getSrc = (id: string) => {
    const target = data.find(x => x.id === id);
    if (target) {
      return `/images/${target.no}_0.png`
    }
    return `/images/001_0.png`
  }

  // Next.jsのimageだとclassNameが効かなかったので、
  // classNameを付与する場合はimgタグを使用
  if (props.className) {
    return (
      <img
        className={props.className}
        src={getSrc(props.id)}
        alt="Picture of Selected Pokémon"
        width={props.width ?? 50}
        height={props.height ?? 50}
        onClick={handleClick}
      />
    )
  }

  return (
    <NextImage
      src={getSrc(props.id)}
      alt="Picture of Selected Pokémon"
      width={props.width ?? 50}
      height={props.height ?? 50}
      onClick={handleClick}
    />
  )
}

export default Image;
