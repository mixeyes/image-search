import React, { FormEvent } from 'react';
import classnames from 'classnames';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

interface ISearchBar {
  className: string;
  onChangeQuery(query: string): void;
  onSearch(): void;
}

export const SearchBar: React.FC<ISearchBar> = ({className, onChangeQuery, onSearch}) => (
  <div className={classnames('search-bar', className)}>
    <InputGroup className="mb-3">
      <FormControl
        type="text"
        placeholder="Search ..."
        aria-label="Search ..."
        aria-describedby="basic-addon2"
        onChange={(event: any) => onChangeQuery(event.target.value)}
      />
      <InputGroup.Append>
        <Button className="mr-1 input-group-addon" variant="primary" onClick={() => onSearch()}>search</Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
);
