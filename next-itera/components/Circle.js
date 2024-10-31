"use client"
import React, { forwardRef } from 'react';



export const Circle = forwardRef(({}, ref) => (
        <div ref={ref} className="d11" >
            <div className="d21">
                <div className="d31">
                    <div className="d41">
                        <div className="d51">
                            <div className="d61"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

));

export {Circle};