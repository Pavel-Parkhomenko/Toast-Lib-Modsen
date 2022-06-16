import React from 'react'
import { Toast } from '../components/Toast'
import { toastService } from '../ToastService'
import { POSITION, SPACES } from '../constants'

export default {
  title: 'Toast',
  argTypes: {
    toastType: {
      control: {
        type: 'inline-radio',
        options: ['error', 'warning', 'success', 'info'],
      },
    },
    toastPosition: {
      control: {
        type: "inline-radio",
        options: ["bottomRight", "bottomLeft", "topRight", "topLeft"]
      }
    },
    toastSpaces: {
      control: "inline-radio",
      options: SPACES
    }
  }
}

export const ToastExample = (args: any) =>
  toastService.createToast({
    type: args.toastType,
    spaces: args.toastSpaces,
    position: POSITION[args.toastPosition]
  });