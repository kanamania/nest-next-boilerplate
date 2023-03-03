import { Oval } from 'react-loader-spinner';
const Loading = (props: any) => {
  return (
    <Oval
      height={props.size ?? 32}
      width={props.size ?? 32}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;
