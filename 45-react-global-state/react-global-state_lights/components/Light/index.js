import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightStore } from "../../stores/lightStorage";

export default function Light({ light }) {
  const { toggleLight } = useLightStore();
  return (
    <LightButton
      type="button"
      onClick={() => {
        toggleLight(light.id, light.isOn);
      }}
      isOn={light.isOn}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
