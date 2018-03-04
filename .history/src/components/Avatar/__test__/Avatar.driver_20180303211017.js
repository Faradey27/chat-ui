import React from 'react';
import withMaterial from './../../../../__test__/helpers/withMaterial';
import Avatar from './../index';

class AvatarDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = withMaterial(<Avatar {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('avatar').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default AvatarDriver;
