/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 D:\Portfolio\Portfolio\public\Models\scene.gltf
Author: darwinmuseum.ru (https://sketchfab.com/darwinmuseum.ru)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/carcinus-maenas-36fcdd98f9df46fb80750a8faeb5ea3d
Title: Европейский зелёный краб | Carcinus maenas
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model=(props)=> {
  const { nodes, materials } = useGLTF('/Models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[13.35, -3.42, 25.18]} rotation={[-2.24, 0.14, -0.29]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI, 0, 0]}>
            <mesh geometry={nodes.default001_material_2_0.geometry} material={materials.material_2} />
            <mesh geometry={nodes.default001_material_2_0_1.geometry} material={materials.material_2} />
            <mesh geometry={nodes.default001_material_2_0_2.geometry} material={materials.material_2} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Models/scene.gltf')

export default Model;
