import React from "react";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import listItemTransition from "./../css/listItemTransition.module.css";
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";
import style from "../css/list.module.css";

const List = ({ contacts, filterList, filter, FilterValue, deleteItem }) => {
  return (
    <>
      {contacts.length >= 2 ? (
        <>
          <InputSearch filter={filter} FilterValue={FilterValue} />
        </>
      ) : (
        <></>
      )}
      <TransitionGroup component="ul" className={style.contactList}>
        {filterList.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={200}
            classNames={listItemTransition}
            unmountOnExit
          >
            <ListItem
              key={contact.id}
              deleteItem={deleteItem}
              contact={contact}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
export default List;
