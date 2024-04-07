import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const HelmetLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
};
