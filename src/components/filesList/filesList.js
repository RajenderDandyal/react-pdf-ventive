import React from 'react';
import Text from '../../UI/text/Text';
import './filesList.scss';

const FilesList = ({ filesList, onSelectDoc, selected }) => {
  return (
    <div>
      {filesList.map(item => {
        return (
          <div
            className={selected === item.id ? 'file-container selected' : 'file-container'}
            onClick={() => onSelectDoc(item.id)}
            key={item.id}
          >
            <div className={'img-container'}>
              <img className={'img1'} src={'/images/docSmall.png'} />
            </div>
            <div>
              {<Text addStyle={{ color: '#fff' }}>{item.disName}</Text>}
              <Text addStyle={{ display: 'inline', fontSize: '0.7em', fontWeight: 'light',color:'rgba(255, 255, 255, 0.27)' }}>
                nam vel ports veli
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilesList;
