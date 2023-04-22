import { FC } from 'react';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

type StarButtonProps = {
  isFavorite: boolean,
  onClick: () => void
}

export const StarButton: FC<StarButtonProps> = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
}
