const PageTitle = ({
  titleFa,
  titleEn,
  lang,
  className,
}: {
  titleFa: string;
  titleEn: string;
  lang: "FA" | "EN";
  className?: string;
}) => {
  return (
    <h1 className="text-4xl font-bold text-center">
      {lang === "FA" ? titleFa : titleEn}
    </h1>
  );
};

export default PageTitle;
