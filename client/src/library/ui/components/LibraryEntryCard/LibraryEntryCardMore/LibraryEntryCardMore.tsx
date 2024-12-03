import { useState, MouseEvent } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';

import CheckIcon from '../../../../../assets/check.svg?react';
import MoreIcon from '../../../../../assets/more.svg?react';
import RemoveIcon from '../../../../../assets/remove.svg?react';

export type LibraryEntryCardMoreProps = {
  onMarkAsRead: () => void;
  onRemove: () => void;
};

export const LibraryEntryCardMore = ({
  onRemove,
  onMarkAsRead,
}: LibraryEntryCardMoreProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onReadClick = () => {
    onMarkAsRead();
    handleClose();
  };

  const onRemoveClick = () => {
    onRemove();
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon width={24} height={24} />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={onReadClick}>
          <CheckIcon width={20} height={20} />
          Mark as read
        </MenuItem>
        <MenuItem onClick={onRemoveClick}>
          <RemoveIcon width={20} height={20} />
          Remove
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LibraryEntryCardMore;
