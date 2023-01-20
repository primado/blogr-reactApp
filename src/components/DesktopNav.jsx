import React from "react";
import { Menu } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import {useEffect, useRef, useState } from 'react'

// Images




export default function DesktopNav() {

    return (

        <div>

            <Menu as="div" className="relative inline-block">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center focus:outline-none">Product

                    <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                        
                    </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 mt-2 w-56 bg-light-red">
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (

                                <a href="#" className={`${ active ? 'text-very-dark-blue cursor-pointer' : 'text-greyish-blue cursor-pointer' }
                                 group flex items-center w-full px-2 py-2 text-sm`}
                                >
                                    Overview
                                </a>
                            
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>

        </div>
    )

}