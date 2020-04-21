const formatDate = (value: Date): string => {
  const dataString = value.toString();
  const [dataStringFormated] = dataString.split('T');
  return dataStringFormated;
};

export default formatDate;
