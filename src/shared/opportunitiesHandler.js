import babyLogo from '../assets/baby.svg';
import returnTransferLogo from '../assets/return-transfer.svg';
import earlyCheckInLogo from '../assets/early-check-in.svg';
import lateCheckOutLogo from '../assets/late-check-out.svg';
import oval from '../assets/oval.svg';
import rectangle from '../assets/rectangle.svg';

export const opportunitiesHandler = (
  hasBabies,
  hasEarlyCheckIn,
  hasLateCheckOut,
  hasReturnTransfer
) => {
  let opportunitiesArray = [];

  if (hasBabies) {
    opportunitiesArray = opportunitiesArray.concat(
      <img src={babyLogo} alt='baby logo' />
    );
  }

  if (hasEarlyCheckIn) {
    opportunitiesArray = opportunitiesArray.concat(
      <img src={earlyCheckInLogo} alt='early check in logo' />
    );
  }

  if (hasLateCheckOut) {
    opportunitiesArray = opportunitiesArray.concat(
      <img src={lateCheckOutLogo} alt='late check out logo' />
    );
  }

  if (hasReturnTransfer) {
    opportunitiesArray = opportunitiesArray.concat(
      <img src={returnTransferLogo} alt='return transfer logo' />
    );
  }

  if (!opportunitiesArray.length) {
    opportunitiesArray = opportunitiesArray.concat(
      <div
        style={{ position: 'relative', display: 'flex', width: 'fit-content' }}
      >
        <img
          src={oval}
          alt='oval'
          style={{
            marginRight: 0,
            padding: 0,
            backgroundColor: '#fff',
            width: 38,
            height: 38,
          }}
        />
        <img
          src={rectangle}
          alt='rectangle'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            width: 6,
            height: 6,
            marginRight: 0,
            padding: 0,
          }}
        />
      </div>
    );
  }

  return opportunitiesArray;
};
